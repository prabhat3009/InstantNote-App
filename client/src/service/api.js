import axios from 'axios';


const URL = 'https://instantnote-app-server.onrender.com';

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log('Error while calling addUser api', error);
  }
}



export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log('Error while calling getUsers api', error);
  }
}

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling getUser api', error);
  }
}

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log('Error while calling editUser api', error);
  }
}

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while calling deleteUser api', error);
  }
}







