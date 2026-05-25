pipeline {

    agent any

    stages {

        stage('Build Docker Image') {

            steps {
                sh 'docker build -t movie-app .'
            }
        }

        stage('Deploy to Kubernetes') {

            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
