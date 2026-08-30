# LMS Project Services

This repository contains the backend microservices of the **Learning Management System (LMS)**.

The project follows a **Microservices Architecture**, where each service is responsible for a specific business functionality.

## 📦 Services

### 1. User Service

Responsible for user-related operations and user management.

### 2. Book Service

Responsible for managing books and book-related operations.

### 3. Borrowing Service

Responsible for book borrowing and borrowing-related operations.

## 🏗️ Architecture

```text
                         ┌─────────────────┐
                         │    Frontend     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   API Gateway   │
                         └────────┬────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
                ▼                 ▼                 ▼
        ┌──────────────┐  ┌──────────────┐  ┌────────────────┐
        │ User Service │  │ Book Service │  │Borrowing       │
        │              │  │              │  │Service         │
        └──────┬───────┘  └──────┬───────┘  └───────┬────────┘
               │                 │                   │
               ▼                 ▼                   ▼
           ┌───────┐         ┌───────┐          ┌───────┐
           │MongoDB│         │MongoDB│          │MySql│
           └───────┘         └───────┘          └───────┘
