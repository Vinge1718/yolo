pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS=credentials('docker')
    }

    stages {
        stage('Start') {
            steps {
                echo 'The build has started'
            }
        }
        stage('Clone the repository') {
            steps {
                git url: 'https://github.com/Brillianne/yolo-app-microservice.git', branch: 'master'
            }
        }
        stage('Docker is installed') {
            steps {
                sh '''
                   docker --version
                   '''
            }
        }
        stage('Build client image') {
            steps {
                sh '''
                   cd client
                   docker build -t bchepngeno1/client:2.1.0 .
                   '''
            }
        }
        stage('Build backend image') {
            steps {
                sh '''
                   cd backend
                   docker build -t bchepngeno1/backend:2.1.0 .
                   '''
            }
        }
        stage('DockerHub Login') {
            steps {
                sh '''
                   echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                   '''
            }
        }
        stage('Push images to Dockerhub') {
            steps {
                sh '''
                   docker push bchepngeno1/backend:2.1.0
                   docker push bchepngeno1/client:2.1.0
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'The build has ended'
            }
        }
    }
    post {
       always {
           sh 'docker logout'
       } 
    }
}