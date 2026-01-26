pipeline {
    agent any

    tools {
        nodejs 'NodeJS_LTS'
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

post {
    always {
allure([
    includeProperties: false,
    jdk: '',
    commandline: 'Allure',
    properties: [],
    reportBuildPolicy: 'ALWAYS',
    results: [[path: 'allure-results']]
])}
}

}
