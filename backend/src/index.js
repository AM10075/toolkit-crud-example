const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("express");
let app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  console.log(req.query);

  res.status(200).json({
    data: {
      content: [
        {
          id: 357150,
          description: "Prueba 14 noviembre",
          amount: 100.0,
          atmReference: null,
          strIdentifierPayer: null,
          strIdentifierPayee: null,
          coreReference: "3179242",
          integrationBusReference: null,
          channelReference: null,
          channelId: "101",
          applicationId: "2233",
          orderId: null,
          strIdTerminal: null,
          strAuthorizationCode: null,
          useCase: {
            id: 177,
            title: "WITHDRAW_CASH_OUT_QR",
            description: null,
            creationDate: "2021-09-22T10:52:22.79",
            updateDate: null,
            customerCreation: null,
            customerUpdate: null,
            active: true,
            deleted: false,
            canceled: false,
          },
          txnStatus: {
            id: 70,
            title: "Capture Cancel",
            description: null,
            creationDate: "2020-06-12T09:02:32.7133333",
            updateDate: null,
            customerCreation: null,
            customerUpdate: null,
            active: true,
            deleted: false,
            canceled: false,
          },
          error: null,
          currency: {
            id: 1,
            name: "Hondurian Lempira",
            code: "HNL",
            num: null,
            decimals: null,
            sign: "L.",
            description: null,
            creationDate: "2020-06-12T09:01:32.5333333",
            updateDate: null,
            customerCreation: null,
            customerUpdate: null,
            active: true,
            deleted: false,
            canceled: false,
          },
          payer: {
            id: 6630,
            name: "?",
            email: "",
            msisdn: "89461637",
            username: "mflores96",
            birthday: null,
            cancellationReason: null,
            blackListReason: null,
            customerType: {
              id: 2,
              title: "Consumer",
              description: null,
              strCode: "STANDARD_CONSUMER",
              creationDate: "2020-06-12T09:03:19.62",
              updateDate: null,
              customerCreation: null,
              customerUpdate: null,
              active: true,
              deleted: false,
              canceled: false,
              test: null,
              internal: null,
            },
            parent: null,
            language: null,
            country: null,
            notificationMode: null,
            creationDate: "2020-11-03T12:06:45.7933333",
            updateDate: "2020-11-14T13:18:11.8066667",
            customerCreation: null,
            customerUpdate: null,
            active: null,
            deleted: null,
            canceled: null,
            test: null,
          },
          payee: {
            id: 6630,
            name: "?",
            email: "",
            msisdn: "89461637",
            username: "mflores96",
            birthday: null,
            cancellationReason: null,
            blackListReason: null,
            customerType: {
              id: 2,
              title: "Consumer",
              description: null,
              strCode: "STANDARD_CONSUMER",
              creationDate: "2020-06-12T09:03:19.62",
              updateDate: null,
              customerCreation: null,
              customerUpdate: null,
              active: true,
              deleted: false,
              canceled: false,
              test: null,
              internal: null,
            },
            parent: null,
            language: null,
            country: null,
            notificationMode: null,
            creationDate: "2020-11-03T12:06:45.7933333",
            updateDate: "2020-11-14T13:18:11.8066667",
            customerCreation: null,
            customerUpdate: null,
            active: null,
            deleted: null,
            canceled: null,
            test: null,
          },
          payerPaymentInstrument: {
            id: 4888,
            strIdentifier: "10113049703",
            strCustomBalance: "928.3800",
            strCustomStatus: "A",
            alias: null,
            balance: null,
            description: null,
            paymentInstrumentType: null,
            customer: {
              id: 6630,
              name: "?",
              email: "",
              msisdn: "89461637",
              username: "mflores96",
              birthday: null,
              cancellationReason: null,
              blackListReason: null,
              customerType: {
                id: 2,
                title: "Consumer",
                description: null,
                strCode: "STANDARD_CONSUMER",
                creationDate: "2020-06-12T09:03:19.62",
                updateDate: null,
                customerCreation: null,
                customerUpdate: null,
                active: true,
                deleted: false,
                canceled: false,
                test: null,
                internal: null,
              },
              parent: null,
              language: null,
              country: null,
              notificationMode: null,
              creationDate: "2020-11-03T12:06:45.7933333",
              updateDate: "2020-11-14T13:18:11.8066667",
              customerCreation: null,
              customerUpdate: null,
              active: null,
              deleted: null,
              canceled: null,
              test: null,
            },
            currency: null,
            creationDate: "2020-11-14T13:18:11.84",
            updateDate: null,
            customerCreation: null,
            customerUpdate: null,
            active: null,
            deleted: null,
            canceled: null,
          },
          payeePaymentInstrument: null,
          channel: null,
          expirationDate: "2022-11-15T22:07:04.2166667",
          creationDate: "2022-11-14T21:58:34.9833333",
          updateDate: "2022-11-15T22:07:04.2233333",
        },
      ],
      pageable: {
        sort: {
          empty: false,
          sorted: true,
          unsorted: false,
        },
        offset: 0,
        pageSize: 1,
        pageNumber: 0,
        paged: true,
        unpaged: false,
      },
      last: false,
      totalElements: 314697,
      totalPages: 314697,
      size: 1,
      number: 0,
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      first: true,
      numberOfElements: 1,
      empty: false,
    },
  });
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
