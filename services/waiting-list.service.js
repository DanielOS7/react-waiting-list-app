export const postWaitingList = (data) => {
  return fetch('http://localhost:3000/api/waiting-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
