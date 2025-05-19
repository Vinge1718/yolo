provider "local" {}

resource "null_resource" "provision" {
  provisioner "local-exec" {
    command = "ansible-playbook -i ../ansible/inventory.yml ../ansible/site.yml"
  }
}
