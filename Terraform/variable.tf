variable "docker_images" {
  type = list(string)
  default = [
    "mngaruiya/yoloreactapiclient:v1.0.1",
    "mngaruiya/yolodb_backend:v1.0.1",
  ]
}

variable "machine_type" {
  type    = string
  default = "e2-medium"
}

variable "machine_image" {
  type    = string
  default = "debian-cloud/debian-11"
}

variable "project_id" {
  type = string
}

variable "project_region" {
  type = string
  default = "europe-west1"
}