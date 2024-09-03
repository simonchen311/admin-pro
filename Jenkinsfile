pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // 拉取代码

                echo '测试git版本'
                sh 'git -v'
                echo '开始安装nvm node 和 pnpm'
                sh 'cd ~/.nvm'
	            sh 'git checkout v0.34.0'
	            sh 'nvm use 16.14.2'
	            sh 'nvm alias default 16.14.2'
	            sh 'npm config set registry https://registry.npmmirror.com/'
	            sh 'npm i -g pnpm@8.15.5'
                echo '测试node版本'
                sh 'node -v'
                // git 'ssh://git@1.2.3.4:8822/react-wheel/react-coms.git'
            }
        }

        // stage('Build') {
        //     steps {
        //         // 安装依赖并构建项目
        //         sh 'npm install'
        //         sh 'npm run build'
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
