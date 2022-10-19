const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("express");
let app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  console.log(req.query);
  let count = 0;
  setInterval(() => {
    if (count === 0) {
      res.status(200).json({
        content: [
          {
            id: 5,
            nombre: "Erich 4",
            apellido: "Gamma",
            email: "erich.gamma@gmail.com",
            createAt: "2018-01-31",
            foto: null,
            region: {
              id: 4,
              nombre: "Europa",
            },
            facturas: [],
          },
          {
            id: 6,
            nombre: "Richard",
            apellido: "Helm",
            email: "richard.helm@gmail.com",
            createAt: "2018-02-09",
            foto: null,
            region: {
              id: 3,
              nombre: "Norteamérica",
            },
            facturas: [],
          },
          {
            id: 7,
            nombre: "Ralph",
            apellido: "Johnson",
            email: "ralph.johnson@gmail.com",
            createAt: "2018-02-17",
            foto: null,
            region: {
              id: 3,
              nombre: "Norteamérica",
            },
            facturas: [],
          },
          {
            id: 8,
            nombre: "John",
            apellido: "Vlissides",
            email: "john.vlissides@gmail.com",
            createAt: "2018-02-27",
            foto: null,
            region: {
              id: 3,
              nombre: "Norteamérica",
            },
            facturas: [],
          },
        ],
        pageable: {
          sort: {
            sorted: false,
            unsorted: true,
            empty: true,
          },
          offset: 4,
          pageSize: 4,
          pageNumber: 1,
          paged: true,
          unpaged: false,
        },
        last: false,
        totalElements: 1000,
        totalPages: 100,
        size: 4,
        number: 1,
        sort: {
          sorted: false,
          unsorted: true,
          empty: true,
        },
        numberOfElements: 4,
        first: false,
        empty: false,
      });
      clearInterval();
      count = count + 1;
    }
  }, 2000);
});
app.post("/", (req, res) => {
  res.json({ POST: req.body.data });
});
app.put("/", (req, res) => {
  res.json({ Put: req.body.data });
});
app.delete("/", (req, res) => {
  res.json({ Delete: req.body.data });
});

app.listen("5175", (req, res) => {
  console.log("App on port 5175");
});
