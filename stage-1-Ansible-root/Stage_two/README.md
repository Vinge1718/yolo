
# YOLO E-commerce Platform – Stage 2: Terraform + Ansible Provisioning

This project demonstrates infrastructure automation using Terraform and Ansible to provision and configure a containerized e-commerce web application.

## 📦 Project Structure



## 🚀 How to Run

1. **Clone the repo** and `cd` into this folder:
    ```bash
    git clone https://github.com/Thalma8/yolo.git
    cd yolo/stage-1-Ansible-root/Stage_two/terraform
    ```

2. **Initialize Terraform**:
    ```bash
    terraform init
    ```

3. **Apply the configuration**:
    ```bash
    terraform apply -auto-approve
    ```

    This will automatically trigger the Ansible playbook via `local-exec`.

4. **Access the app**:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:5000/api/products](http://localhost:5000/api/products)

---

## 🧪 Testing

Try to:
- Add a product through the frontend form
- Refresh the page
- The product should persist (data is stored in a MongoDB Docker volume)

---

## 🔧 Prerequisites

- Docker
- Ansible
- Terraform
