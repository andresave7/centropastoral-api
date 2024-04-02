"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = {
    api: {
        path: "/api/v1",
        securePath: "/secure-api",
        version: 1,
    },
    // todo move this to the .env
    apiDb: {
        user: "centropasto",
        password: "JesusIsKing2024!",
        database: "centro-pastoral-db",
        options: {
            host: "160.153.71.101",
            port: 3306,
            dialect: "mysql",
            charset: "utf8",
            collation: "utf8_unicode_ci",
            //   dialectOptions: {
            //     insecureAuth: true,
            //     encrypt:true,
            //     ssl:{ ca: fs.readFileSync('./certs/ca-assemblerinc.pem') }
            //   }
        },
    },
    firebaseConfig: {
        apiKey: "AIzaSyB38zbN1h2OVi1-1NYT9cfbon2zSMt-ew0",
        authDomain: "centro-pastoral-api.firebaseapp.com",
        projectId: "centro-pastoral-api",
        storageBucket: "centro-pastoral-api.appspot.com",
        messagingSenderId: "778306558931",
        appId: "1:778306558931:web:53636c25d9d3555a236d26",
        measurementId: "G-VNSQD11Q3F",
        type: "service_account",
        project_id: "centro-pastoral-140f0",
        private_key_id: "46685ed3c555487bc17ace93fce0f597c1ac8cb5",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxDOD/Lx9jMs/U\nWtYVm+ZNSys5rXsXzwjN4Zk+Q160bVF+WB7ibCmi+CkFbKRiaRf+GJziOPt68GGK\nRav8SlsKp0lJSTQihAbtM14+0XznsXGE/Ri39Pu6moa+r7FxQDd3gNftSdJRwzJx\npoYpTYFxe6C9raRtwikh0LEeq8chESZF96TynzgoBP+mv8ov9SXXDtq84+iOPCGg\nZAJedQSLtM0Rirp/dFPdiN65zu31m/U7Jl2n+gR62t9MiReucVy57KfmubPiIZV+\nPFe8gfmxkCXm59twYE9MEGJPVV/UYTQn7KvFhtKPf+8uxu1CwjWQdIB7tnfsNlJg\nJ3zmgHwFAgMBAAECggEAIxW1RHxXEPZRvvgdMn0JX0nFEBHzsZ0iVoIdNvxsuP5s\nxse5nw7mFVht8Jg93w6KZZ0FAcNe+lbGTXtPAJjPf8X0vOQXw7s8ECc8xuAGi3db\nUopBKrsOY0UZ7JGubQ3XsAPFRk15syAmT+U68tZcD1v7V3sgeWufcQcFAlnyBPgn\nR/AmA2yB8o4WPVt2Z2oYFjQ9ZfpLIt0jFwpNlXWJwNsGxiiswkSWt2PCNtvrGOIH\nNzlblK1DJbRuD0pBX3qbOuiW7mtl1jmal0sMRnHvDzjFGSoJWx9TWCKmyKzFHe+w\ndP7XdBj3Bp2fZaSM8E2/iwrBeJS/6idTBlqvWSWThQKBgQDp672ulwwV0xXGQbVr\n4oS+QhDgkHELAPISumqaadVEGtS1G2R7DQcs9qKFTKqoYMfdmGteJp8sPswfGLTv\nfqvzUewDRBssWK1PBp2NHWBGrH81cwDz+M2YOeIQITG6Ch472Kr5GStwRFCp/d2l\naKAjLLvZ2uZ6UBMa55GhPQPFzwKBgQDBwve2EMbuEvAdg10Ll+GuAdXfAZTEktzG\nkkn5/KT4odMcVXzTHGBmCjvtUD3Co2m0YXPhhcsMh/8kvUE15EZGYzdOxP2TZCuK\noip6uBU7Og4xZ7ef3rFlxQIq7VrJRwrhqqzS7F+Uhzb1LLu8BJRJSqlTFP2iSTle\nlgVqC5hp6wKBgBRn2SsiyA4bVNnvn3ji0LucHcbJMuNH2NYjZutDcjQ3tvh5hEFr\nuIWGmlTQhE6d6rF8+1jCO75rV/kaeaYuwac/LTx3s3sh3TR4mkPWHTDtGUe7WYju\n2lh+LCdGDgVxnoOP+hIyzORFQVgi6jPktZt76oMtok9nLtN5Ae4z2WFnAoGAVxif\npoxmD1Ad9PY+ld6AyGn0zBh22eG2MeBCNofVVBnRvpPC11aTEmsZQvRlvp8b/cQs\nhbxRaGGdU9Nqg6IH4M3qZ5Lu9Rj65Yc9lwo2KPhQtu6LQOamUTu8XLVysLUpdAT3\nSJyN3kLldlHUVZCtY0CXWkw+Mnu9uQGwj1mE+l8CgYEAuAKDkOUMVxtwlWWvrrxn\nMbKlppvd0YlBOF2hModYSexKLMRSQ89n4jPNMWt3B9f8IjdJhJzDyG8Ud9qL5IUm\nYENiv3MdCejPDHI3g4YzCwmb/xK3NqzO+5aG9zC47Ab35Uag3gZMTVTgeI7wbeno\nWTq3Q3DvP+MMQjtpWaNtcBg=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-b4h24@centro-pastoral-140f0.iam.gserviceaccount.com",
        client_id: "105045777582344564240",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b4h24%40centro-pastoral-140f0.iam.gserviceaccount.com",
        universe_domain: "googleapis.com",
    },
};
exports.config = config;
//# sourceMappingURL=config.js.map