# Explanation: YOLO App Provisioning Flow (Stage 2)

## 🎯 Objective

This document explains the execution flow, role structure, and Ansible modules used to provision and deploy a containerized e-commerce app using Terraform and Ansible.

---

## ⚙️ Order of Execution

1. **Terraform `main.tf`** triggers Ansible with a `local-exec` provisioner.
2. **Ansible `site.yml`** is executed against `localhost`, using roles in sequence:
    - `setup-mongodb`
    - `backend-deployment`
    - `frontend-deployment`
3. Each role configures its respective Docker container, volume, and network.

---

## 🧩 Roles and Responsibilities

### `setup-mongodb`
- Ensures the `app-mongo-data` volume exists.
- Pulls the MongoDB image.
- Runs the MongoDB container with published ports and volume mount.
- Creates and connects to a shared Docker network (`app-net`).

### `backend-deployment`
- Builds the Node.js backend image from source using a multi-stage Dockerfile.
- Sets the `MONGODB_URI` environment variable to point to the Mongo container.
- Ensures it's connected to the correct Docker network.
- Publishes port `5000`.

### `frontend-deployment`
- Builds the React frontend image.
- Sets the `REACT_APP_BACKEND_URL` to `http://localhost:5000`.
- Publishes port `3000`.
- Communicates with backend via exposed ports.

---

## 🧰 Ansible Modules Used

- `docker_container`: Used to run and manage containers.
- `docker_image`: Builds images from Dockerfiles.
- `docker_volume`: Ensures data persistence.
- `docker_network`: Creates a shared network for inter-container communication.
- `git`: (In Stage 1) used to clone the project repo.

---

## ✅ Variables and Tags

Each role makes use of `vars/main.yml` files for:
- Image names and versions
- Volume and network names
- Port configurations
- MongoDB URI

Tags were added to each major block for clarity and possible reuse.

---

## 📦 Why This Approach?

- **Terraform** handles provisioning (can be extended to cloud or VMs later).
- **Ansible** handles post-provision configuration and Docker orchestration.
- Roles and variables make the setup modular and easy to maintain or scale.
