import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

const db = getDatabase();

//Variable DOM
var namebox = document.getElementById("Namebox");
var rollbox = document.getElementById("Rollbox");
var secbox = document.getElementById("Secbox");
var genbox = document.getElementById("Genbox");

var insBtn = document.getElementById("Insbtn");
var selBtn = document.getElementById("Selbtn");
var updBtn = document.getElementById("Updbtn");
var delBtn = document.getElementById("Delbtn");

//Insert
function insertData() {
  set(ref(db, "TheStudents/" + rollbox.value), {
    NameOfStd: namebox.value,
    RollNo: rollbox.value,
    Section: secbox.value,
    Gender: genbox.value,
  })
    .then(() => {
      alert("data stored successfully");
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

insBtn.addEventListener("click", insertData);

//Select data
function selectData() {
  const dbref = ref(db);

  // get(child(dbref, "TheStudents/" + rollbox.value))
  get(child(dbref, "TheStudents/" + rollbox.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        namebox.value = snapshot.val().NameOfStd;
        rollbox.value = snapshot.val().RollNo;
        secbox.value = snapshot.val().Section;
        genbox.value = snapshot.val().Gender;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

selBtn.addEventListener("click", selectData);

//Update
function updateData() {
  update(ref(db, "TheStudents/" + rollbox.value), {
    NameOfStd: namebox.value,
    Section: secbox.value,
    Gender: genbox.value,
  })
    .then(() => {
      alert("data stored successfully");
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

updBtn.addEventListener("click", updateData);

//Delete data
function deleteData() {
  remove(ref(db, "TheStudents/" + rollbox.value))
    .then(() => {
      alert("data removed successfully");
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

delBtn.addEventListener("click", deleteData);
