export const getAll = async (url: string = "") => {
  try {
    const response = await fetch(`${url}/api/photo/list`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllByName = async (url: string = "", text: string) => {
  try {
    const response = await fetch(`${url}/api/photo/list?name=${text}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const create = async (url: string = "", data: any) => {
  try {
    await fetch(`${url}/api/photo/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const remove = async (
  url: string = "",
  id: string,
  password: string
) => {
  try {
    const data = {
      password,
    };
    await fetch(`${url}/api/photo/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
