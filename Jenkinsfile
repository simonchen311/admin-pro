pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                // 拉取代码

                echo '当前git版本'
                sh 'git -v'
                echo '开始拉取git代码'
                sshagent(credentials: ['3828ea59-c322-4700-8626-7cb0e9298f64']) {
                    sh 'git clone git@github.com:simonchen311/admin-pro.git'
                }
                // git  credentialsId: '3828ea59-c322-4700-8626-7cb0e9298f64', url: 'git@github.com:simonchen311/admin-pro.git'

                // https://github.com/simonchen311/admin-pro.git
            }
        }
        stage('Install') {
            steps {
                sh "pwd"
                sh "ls"
                // echo '开始安装nvm node 和 pnpm'
                // sh """
                //     node -v
                //     npm config set registry https://registry.npmmirror.com/
                //     npm i -g pnpm@8.15.5
                //     pnpm -v
                // """
            }
        }
        // stage('Build') {
        //     steps {
        //         // 安装依赖并构建项目
        //         sh 'pnpm install'
        //     }
        // }
    }

    // post {
    //     always {
    //         // 这里可以添加构建后的操作，比如清理、发送通知等
    //         echo '项目已经构建完成.'
    //     }
    // }
        //
}
