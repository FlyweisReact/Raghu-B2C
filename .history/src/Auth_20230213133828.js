
const token = localStorage.getItem("token");
console.log(token)

const auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default auth;
