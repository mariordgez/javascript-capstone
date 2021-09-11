const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes',
  );
  const data = await response.json();
  return data;
};

const getComments = async (button) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/comments?item_id=${button}`,
  );
  return response.json();
};

export { getLikes, getComments };
