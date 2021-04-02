import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { Sidebar } from "../components/header/Sidebar";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export const FriendList = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>Friend List</h1>
        <Formik
          initialValues={{ friends: ["jared", "ian", "brent"] }}
          onSubmit={(values) =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <Form>
              <FieldArray
                name="friends"
                render={(arrayHelpers) => (
                  <div>
                    {values.friends && values.friends.length > 0 ? (
                      values.friends.map((friend, index) => (
                        <div key={index}>
                          <Field name={`friends.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        />
        <h1>Title List</h1>
        <Formik
          initialValues={{ titles: [] }}
          onSubmit={(values) =>
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <div>
              <Form>
                <FieldArray
                  name="titles"
                  render={(arrayHelpers) => (
                    <div>
                      {values.titles && values.titles.length > 0 ? (
                        values.titles.map((title, index) => (
                          <div key={index}>
                            <Field name={`titles.${index}`} />

                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        ))
                      ) : (
                        <button
                          type="button"
                          onClick={() => arrayHelpers.push("")}
                        >
                          {/* show this when user has removed all friends from the list */}
                          Add a title
                        </button>
                      )}
                    </div>
                  )}
                />

                <div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </div>
          )}
        />
      </div>
    </div>
  );
};
