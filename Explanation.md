## Git Workflow Used
git clone (url repo)

git add .

git commit -m "decription in each development"

git push


Set up the environment by provisioning ansible instances with  virtual machine with the latest ubuntu server. (use the same configurations that we employed in the examples within the weeks content where no authentication keys or certificates are needed for ease of marking - Jeff Geerlings ubuntu 20.04 (Links to an external site.) is a good bet since we have already downloaded it and set it up).
The task was achived byansible instances provisioning as follows: -creation of theansible instances -setting up the ansible file  -The server names  are stated in the inventory.yaml configurations.

Set up the playbook in the root directory/folder of the main project. Try to implement the use of the following concepts in tasks definition your playbook:Variables (variable files will earn you bonus points if deemed necessary).Roles in the implementation of various tasks (for example the front end logic/containerization).Blocks and tags for ease of assessment and as a good coding practice as well.
-A playbook was developed with the name"playbook.yml" The playbook was to create images for the backend and the client that are able to connect to the cloud mongoDB. The playbook uses 2 roles i.e backend role and the client role. The role are found in the roles folder under /etc/ansible/roles. The playbook also uses tags and blocks. -playbook is made to clone the code from GitHub and run the necessary setups.

In the same directory checkout into a branch named "Stage_two". Create a new directory in the stage-1-Ansible-root folder and name it after the branch you just checked into.In this directory, you'll use Terraform for resource provisioning and Ansible for server configuration and application deployment, together in order to create a new environment. From an infrastructure perspective, we’ll try to keep things simple and build a similar stack to the one we created in stage 1 above with regards to containerization and the use of a ansible instances server.