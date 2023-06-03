variable "docker_images" {
  type = list(string)
  default = [
    "mngaruiya/yoloreactapiclient:v1.0.1",
    "mngaruiya/yolodb_backend:v1.0.1",
  ]
}