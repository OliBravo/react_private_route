export default {
    login: data => {
      const {username, password} = data;
      return new Promise((resolve, reject) => {
        console.log(`inside API: ${username}, ${password}`)
        if (username === "coderslab" && password === "qwerty") {
          resolve({
            username,
            name: "Jan",
            surname: "Kowalski",
            lastLogin: new Date("04/08/2019 13:20:22")
          });
        } else {
          reject("Hasło lub login są nieprawidłowe!");
        }
      });
    }
  };
  