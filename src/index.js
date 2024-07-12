import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Register } from './component/register/register';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './netflix/netlix-index/netflix-index';
import { DataBinding } from './component/data-binding/data-binding';
import {BindingObject} from './component/dataBinding-Object/dataBinding-Object.jsx';
import {DataBindingKeys} from './component/Binding-keys/Binding-keys.jsx';
import {DataBindingObject} from './component/DataBindingObject/DataBindingObject.jsx'
import { BindingArray } from './component/DataBindings/DataBindings.jsx';
import {PointsTable} from './component/iccWoldcup/iccWoldcup.jsx';
import { FlipKart } from './component/FlipKart/FlipKart.jsx';
import {BindingDate} from './component/Binding-Date/Binding-Date.jsx'
import { StateBinding } from './component/State-Management/State-Management.jsx';
import { StateExample } from './component/useStateEx/useStateEx.jsx';
import {BindingExample} from './component/useStatement/useStatement.jsx';
import {ClassBinding} from './component/class-binding/class-binding.jsx';
import {BindingBootstrap} from './component/classbinding-bootstrap/classbinding-bootstrap.jsx';
import {SortClass} from './component/setSortClass/setSortClass.jsx';
import {ApplyStyle} from './component/Style-Applying/Style-Applying.jsx';
import {EventBinding} from './component/EventBinding/EventBinding.jsx';
import {EventPropagation} from './component/EventPropogation/EventPropogation.jsx';
import {MouseEvent} from './component/mouse-event/mouse-event.jsx';
import {MouseMove} from './component/mouse-move/mouse-move.jsx';
import {VerifyUser} from './component/onKeyUp/onKeyUp.jsx'
import {KeyDemo} from './component/onKeyPress/onKeyPress.jsx'
import {VerifyPassword} from './component/password-verify/password-verify.jsx';
import {LoadFunction} from './component/useEffect-hook/useEffect-hook.jsx';
import {ProgressFunction} from './component/progress-bar/progress-bar.jsx';
import {VerifyDrop} from './component/verify-ifsc/verify-ifsc.jsx';
import {ButtonEventEx} from './component/button-events/button-events.jsx';
import {ButtonDemo} from './component/button-demo/button-demo.jsx';
import {TouchDetails} from './component/touch-events/touch-events.jsx';
import {TimerDemo} from './component/salutation/salutation.jsx';
import {TimeoutDemo} from './component/setTimeout/setTimeout.jsx';
import {FlipkartEx} from './component/FlipKartEx/FlipKart-Ex.jsx';
import {XmlRequest} from './component/XMLHttpRequest/XMLHttpRequest.jsx';
import {FetchRequest} from './component/fetch-request/fetch-request.jsx';
import {JqueryRequest} from './component/jquery-request/jquery-request.jsx';
import {AxiosMethod} from './component/axios-library/axios-library.jsx';
import {NasaAPI} from './component/nasa-api/nasa-api.jsx';
import {PracticeComponent} from './component/Practice-Component/Practice-Component.jsx';
import {Fakestore} from './component/fakestore/fakestore.jsx';
import { InmemoryCRUD } from './component/testing-crude/testing-crude.jsx';
import {InmemoryCRUDEx} from './component/complete-crude/complete-crude.jsx';
import { ReactFormDemo } from './component/React-form/React-form.jsx';
import { FormikDemo } from './component/Formik-Demo/Formik-Demo.jsx';
import {FormikForm} from './component/Formik-Form/Formik-Form.jsx';
import {FormikValidation} from './component/Formik-validationSchema/Formik-validationSchema.jsx';
import {FormikExample} from './component/Formik-Example/Formik-Example.jsx';
import {FormikRegister} from './component/Formik-Register/Formik-Register.jsx';
import { ToDoApp } from './component/to-do/todo.jsx';
import {PropsDemo} from './component-libary/prop-demo.jsx';
import {PropertyDemo} from './property-demo.jsx/property-demo.jsx';
import {AdminLogin} from './class-component/admin-login.jsx';
import {Admin} from './this.state/this-state.jsx';
import {ComponentMount} from './component/componentdidmount/component-Did-Mount.jsx';
import {SetState} from './class-component/setState.jsx';
import {ClassEventDemo} from './class-event-demo/class-event-demo.jsx';
import {CycleDemo} from './component/cycle-demo/cycle-demo.jsx';
import {Shop} from './component-libary/shop.jsx';
import {MaterialDemo} from './material-ui/material-example.jsx';
import {MaterialDate} from './material-ui-date/material-date.jsx';
import { UserLogin } from './Login/user-login.jsx';
import { TimeOutDemo } from './useRef/useRefer.jsx';
import {SetTimeoutDemo} from './useRef/useRef.jsx';
import { ContextDemo } from './useContext/useContext.jsx';
import {ReducerDemo} from './useReducer/use-reducer.jsx';
import { FakeStoreApi } from './Fakestore - Api/fakestore.jsx';
import { Provider } from 'react-redux';
import store from './FakeStore/store.js';
import { FakeStore } from './FakeStore/fakestore.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <FakeStore/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
