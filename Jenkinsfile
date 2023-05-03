pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Start') {
            steps {
                echo 'The build has started'
            }
        }
        stage('Clone the repository') {
            steps {
                git url: 'https://github.com/Brillianne/gallery.git', branch: 'master'
            }
        }
        stage('Check docker version') {
            steps {
                sh '''
                  docker -v
                   '''
            }
        }
      
        stage('End') {
            steps {
                echo 'The build has ended'
            }
        }
    }
}