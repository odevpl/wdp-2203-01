//selectors
export const getFeedback = ({ feedbacks }) =>
  feedbacks.find(feedback => feedback.id === 'client1');

// actions
//const createActionName = actionName => `app/feedback/${actionName}`;

// action creators

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
