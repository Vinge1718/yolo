resource "null_resource" "trigger_vagrant" {
  provisioner "local-exec" {
    command = "vagrant up"
  }
}
