Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"
  config.vm.hostname = "yolo-dev"

  config.vm.network "private_network", ip: "192.168.56.99"
  config.vm.network "forwarded_port", guest: 3000, host: 3003
  config.vm.network "forwarded_port", guest: 5000, host: 5003
  config.vm.network "forwarded_port", guest: 27017, host: 27020

  config.vm.synced_folder ".", "/home/vagrant/yolo"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "yolo-cm"
    vb.memory = 2048
    vb.cpus = 2
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt install -y python3 python3-pip git curl
    pip3 install docker docker-compose
  SHELL
end
