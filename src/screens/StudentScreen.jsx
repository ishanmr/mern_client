import React from "react";
import AddStudent from "./AddStudent";

function StudentScreen() {
  // const [isAppReady, updateStudents] = React.useState(false)
  const [students, setStudents] = React.useState([
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@example.com",
      phone: "+91-9876543210",
      dob: "2004-05-14",
    },
    {
      id: 2,
      name: "Diya Patel",
      email: "diya.patel@example.com",
      phone: "+91-9123456780",
      dob: "2005-02-22",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      email: "rohan.gupta@example.com",
      phone: "+91-9988776655",
      dob: "2004-11-03",
    },
    {
      id: 4,
      name: "Ananya Singh",
      email: "ananya.singh@example.com",
      phone: "+91-9811223344",
      dob: "2005-07-19",
    },
    {
      id: 5,
      name: "Kabir Verma",
      email: "kabir.verma@example.com",
      phone: "+91-9700112233",
      dob: "2004-12-30",
    },
    {
      id: 6,
      name: "Priya Joshi",
      email: "priya.joshi@example.com",
      phone: "+91-9655443322",
      dob: "2005-04-11",
    },
    {
      id: 7,
      name: "Aditya Rao",
      email: "aditya.rao@example.com",
      phone: "+91-9544332211",
      dob: "2004-09-25",
    },
    {
      id: 8,
      name: "Neha Nair",
      email: "neha.nair@example.com",
      phone: "+91-9433221100",
      dob: "2005-01-08",
    },
    {
      id: 9,
      name: "Arjun Mehta",
      email: "arjun.mehta@example.com",
      phone: "+91-9322110099",
      dob: "2004-06-17",
    },
    {
      id: 10,
      name: "Sanya Iyer",
      email: "sanya.iyer@example.com",
      phone: "+91-9211009988",
      dob: "2005-08-29",
    },
    {
      id: 11,
      name: "Karan Malhotra",
      email: "karan.malhotra@example.com",
      phone: "+91-9100998877",
      dob: "2004-03-05",
    },
    {
      id: 12,
      name: "Pooja Deshmukh",
      email: "pooja.deshmukh@example.com",
      phone: "+91-9099887766",
      dob: "2005-10-12",
    },
    {
      id: 13,
      name: "Vikram Kulkarni",
      email: "vikram.kulkarni@example.com",
      phone: "+91-9988112233",
      dob: "2004-08-21",
    },
    {
      id: 14,
      name: "Meera Pillai",
      email: "meera.pillai@example.com",
      phone: "+91-9877223344",
      dob: "2005-05-30",
    },
    {
      id: 15,
      name: "Devansh Reddy",
      email: "devansh.reddy@example.com",
      phone: "+91-9766334455",
      dob: "2004-01-15",
    },
    {
      id: 16,
      name: "Tanvi Sen",
      email: "tanvi.sen@example.com",
      phone: "+91-9655445566",
      dob: "2005-09-04",
    },
    {
      id: 17,
      name: "Rahul Kapoor",
      email: "rahul.kapoor@example.com",
      phone: "+91-9544556677",
      dob: "2004-10-18",
    },
    {
      id: 18,
      name: "Kavya Das",
      email: "kavya.das@example.com",
      phone: "+91-9433667788",
      dob: "2005-03-27",
    },
    {
      id: 19,
      name: "Siddharth Banerjee",
      email: "siddharth.banerjee@example.com",
      phone: "+91-9322778899",
      dob: "2004-07-09",
    },
    {
      id: 20,
      name: "Ritu Chawla",
      email: "ritu.chawla@example.com",
      phone: "+91-9211889900",
      dob: "2005-12-16",
    },
  ]);

  return (
    <div>
      <AddStudent totalStudents={students.length} />
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {students.map((rows) => (
            <tr>
              <td>{rows.id}</td>
              <td>{rows.name}</td>
              <td>{rows.email}</td>
              <td>{rows.phone}</td>
              <td>{rows.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentScreen;
