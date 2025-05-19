🛠 Vagrant and Ansible Integration
To simplify development and ensure consistent configuration, this project integrates Vagrant and Ansible for local provisioning in both Stage 1 and Stage 2 setups.

🔧 Vagrant
A lightweight virtual machine is provisioned using ubuntu/focal64 as the base box.

VM setup is handled through Vagrantfile with no SSH keys or certificates needed.

Ensures a clean, reproducible environment for running Docker and Ansible.

Shared folders allow synced access to local project files.

⚙️ Ansible Automation
Ansible automates container orchestration, network setup, and Docker image building using modular, reusable roles.

🧱 Roles Used
setup-mongodb:

Creates a persistent Docker volume and a custom bridge network (app-net)

Deploys the MongoDB container with appropriate port and volume mappings

backend-deployment:

Builds the Node.js backend image (multi-stage)

Sets environment variable MONGODB_URI

Deploys the backend service container

frontend-deployment:

Builds the React frontend image

Injects the REACT_APP_BACKEND_URL environment variable

Exposes the app via port 3000

🧾 Playbooks Used
Stage 1 – Direct Vagrant Provisioning
File: playbook.yml

Trigger: Automatically runs when you do:

bash
Copy code
vagrant up --provision
Purpose: Used during development and testing. Runs all Ansible roles on the local VM directly.

Stage 2 – Terraform + Ansible
File: site.yml

Trigger: Triggered by Terraform using a local-exec provisioner.

bash
Copy code
terraform apply -auto-approve
Purpose: Demonstrates infrastructure-as-code using Terraform to invoke Ansible automatically during provisioning.

🔁 Provisioning Workflow
Stage 1:

vagrant up → VM boots → playbook.yml runs inside the VM

Stage 2:

terraform apply → local Ansible (site.yml) configures the system

🌐 Accessing the App
After either provisioning method, the app is available at:

Service	URL
Frontend	http://localhost:3000
Backend API	http://localhost:5000/api/products
Database	Accessible via MongoDB on port 27017

This structure supports both development and automated infrastructure provisioning, giving you flexibility, clarity, and control.