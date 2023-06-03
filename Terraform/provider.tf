terraform {
  required_providers {
    docker = {
      source = "terraform-providers/docker"
    }

    google = {
      source  = "hashicorp/google"
      version = "4.65.2"
    }
  }
}