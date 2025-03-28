pipeline {
    agent { docker { image 'node:22.14.0-alpine3.21' } } // Use Node.js image
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Installs dependencies if package.json exists
            }
        }
        stage('Run JavaScript') {
            steps {
                sh 'node script.js' // Replace with your JavaScript file name
            }
        }
    }
}
