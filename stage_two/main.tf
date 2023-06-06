

provider "vagrant" {
   version = "2.3.0"
}

rresource "vagrant_environment" "stage_two_vm" {
  box_name = var.box_name
}


resource "null_resource" "ansible_provisioning" {
  provisioner "local-exec" {
    command = "ansible-playbook -i inventory.ini playbook.yml"
    working_dir = "ansible"
  }
}
