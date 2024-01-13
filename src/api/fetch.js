// Visitor Users form data into database
export const addVisitorInfo = async (info) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/visitorUsers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );
  const data = await response.json();
  return data;
};


// Exhibitor Users form data into database
export const addExhibitorInfo = async (info) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/exhibitorUsers`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    }
  );
  const data = await response.json();
  return data;
};

// save subscribes user into database
export const subscribesUser = async (userMail) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/subscribes`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: userMail }),
    }
  );
  const data = response.json();
  return data;
};
