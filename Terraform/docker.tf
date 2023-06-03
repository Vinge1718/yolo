terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.7"
    }
  }
  required_version = ">= 0.14"
}

provider "docker" {
  version = "~> 2.6"
  host    = "npipe:////.//pipe//docker_engine"
}

# Pull image
resource "docker_image" "images" {
  count = length(var.docker_images)
  name  = var.docker_images[count.index]
}

 # Start a container
 resource "docker_container" "containers" {
   count = length(docker_image.images)
   name  = "container${count.index}"
   image = docker_image.images[count.index].name

   depends_on = [ docker_image.images ]
 }
 
