SET TIME ZONE 'UTC';
CREATE TYPE userrole AS ENUM ('admin', 'procurement-manager', 'inspection-manager','client');
CREATE TYPE order_status AS ENUM ('pending', 'in-progress','completed');



CREATE TABLE "users"
(
  "id"                          SERIAL PRIMARY KEY,
  "firstName"                   VARCHAR(50)  NOT NULL,
  "lastName"                    VARCHAR(50)  NOT NULL,
  "email"                       VARCHAR(50)  NOT NULL,
  "password"                    VARCHAR(150) NOT NULL,  
  "mobile"                      VARCHAR(255) NULL,
  "active"                      BOOLEAN DEFAULT FALSE,
  "createdBy"                   VARCHAR(50) NULL,
  "createdByRole"               VARCHAR(50) NULL,
  "createdAt"                   TIMESTAMPTZ NOT NULL,
  "updatedAt"                   TIMESTAMPTZ NOT NULL,
  "deletedAt"                   TIMESTAMPTZ NULL
);

CREATE TABLE "procurementInspectionMapping"
(
  "procurementId"               INT  NOT NULL,
  "inspectionId"                INT  NOT NULL,
  "assignByRole"                VARCHAR(50) NULL,
  "createdAt"                   TIMESTAMPTZ NOT NULL,
  "updatedAt"                   TIMESTAMPTZ NOT NULL,
  "deletedAt"                   TIMESTAMPTZ NULL
);

CREATE TABLE "orders"
(
  "id"                          SERIAL PRIMARY KEY,
  "title"                       VARCHAR(100) NOT NULL,
  "assignTo"                    VARCHAR(50)  NOT NULL,
  "assignBy"                    VARCHAR(50)  NOT NULL,
  "status"                      order_status,  
  "file"                        VARCHAR(255) NULL,
  "client"                      INT NULL,
  "active"                      BOOLEAN DEFAULT FALSE,
  "createdBy"                   VARCHAR(50) NULL,
  "createdAt"                   TIMESTAMPTZ NOT NULL,
  "updatedAt"                   TIMESTAMPTZ NOT NULL,
  "deletedAt"                   TIMESTAMPTZ NULL
);


INSERT INTO "users" ("UUID", "firstName", "lastName", "email", "password", "role", "active" , "createdAt", "updatedAt")
VALUES ('procurement-admin-C1121-Xyyuqq2inxx', 'Main', 'Admin', 'admin@procurement-management.com','$2b$10$1oZ4mBOE5EH0wIK1nUpH8ePovDyHZYnE6.X6fTeh5ATyoVoTLPZhy' , 'admin' , true , NOW(), NOW());
