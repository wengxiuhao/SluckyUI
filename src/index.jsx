import 'slucky/sass/normal.scss';
import './fixed.scss';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { getStore } from 'slucky/src/store';
import '../node_modules/highlight.js/styles/tomorrow.css';
import RenderRouter from './router';
import Global from './pages/global';
// import App from './app'
// import HighorderArticle from "./component/article/highorder-article";
// const HighorderArticle = React.lazy(() => import('./component/article/highorder-article'));
// const HighorderArticle = lazy(() => import('./component/article/highorder-article'));
// const HighorderArticle = lazy(() => new Promise((resolve, reject) => {
//     import('./component/article/highorder-article')
//       .then(result => resolve(result.default ? result : { default: result }))
//       .catch(reject);
//   }));
// import HighorderArticlePublish from "./component/articlePublish/highorder-articlePublish";
// import HighorderArticleDetail from "./component/articleDetail/highorder-articleDetail";
// import HighorderRegister from "./component/register/highorder-register";

// webpack动态引入资源 https://segmentfault.com/a/1190000015367490

const requireAll = requireContext => requireContext
    .keys()
    .map(requireContext);
const req = require.context('./icons', false, /\.svg$/);
requireAll(req);

import __API__ from './config.js';
window.__API__ = __API__;

// if (module.hot) {
//     module
//         .hot
//         .accept();
// }

// if(module.hot){     module.hot.accept(moduleId, callback); } if (module.hot)
// {     // console.log('Accepting the updated printMe module!');
// module.hot.accept('./normal.scss', function () { console.log('Accepting the
// updated printMe module!');         // printMe();       console.log('okok');
// }) }]

const store = getStore();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Global />
                <Switch>
                    {RenderRouter(store)}
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
