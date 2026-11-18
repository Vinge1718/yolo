Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  # Frontend VM
  config.vm.define "frontend" do |frontend|
    frontend.vm.hostname = "frontend"
    frontend.vm.network "private_network", ip: "192.168.56.11"
    frontend.vm.network "forwarded_port", guest: 3000, host: 3000
    frontend.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
      ansible.limit = "frontend"
      ansible.inventory_path = "inventory.yml"
    end
  end

  # Backend VM
  config.vm.define "backend" do |backend|
    backend.vm.hostname = "backend"
    backend.vm.network "private_network", ip: "192.168.56.12"
    backend.vm.network "forwarded_port", guest: 5000, host: 5001
    backend.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
      ansible.limit = "backend"
      ansible.inventory_path = "inventory.yml"
    end
  end

  # Database VM
  config.vm.define "database" do |database|
    database.vm.hostname = "database"
    database.vm.network "private_network", ip: "192.168.56.13"
    database.vm.network "forwarded_port", guest: 27017, host: 27018
    database.vm.provision "ansible" do |ansible|
      ansible.playbook = "playbook.yml"
      ansible.limit = "database"
      ansible.inventory_path = "inventory.yml"
    end
  end
end
