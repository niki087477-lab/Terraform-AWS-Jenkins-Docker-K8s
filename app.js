const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps EKS Project</title>

        <style>
          body {
            background-color: #111;
            color: white;
            font-family: Arial;
            text-align: center;
            padding-top: 100px;
          }

          h1 {
            color: #00ff99;
          }

          p {
            font-size: 20px;
          }
        </style>
      </head>

      <body>

        <h1>DevOps CI/CD Pipeline Success 🚀</h1>

        <p>
          Application deployed using:
        </p>

        <p>
          Terraform + Jenkins + Docker + Kubernetes + EKS
        </p>

      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
