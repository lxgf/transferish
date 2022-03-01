import {ERROR_PAGE_ROUTE, TERMS_PAGE_ROUTE, UPLOAD_PAGE_ROUTE} from "./utils/consts";
import UploadPage from "./components/UploadPage";
import TermsPage from "./components/TermsPage";
import ErrorPage from "./components/ErrorPage";

export const publicRoutes = [
    {
        path: UPLOAD_PAGE_ROUTE,
        Component: UploadPage
    },
    {
        path: ERROR_PAGE_ROUTE,
        Component: ErrorPage
    },
    {
        path: TERMS_PAGE_ROUTE,
        Component: TermsPage
    }
]

export const privateRoutes = [
    // {
    //     path: TERMS_PAGE_ROUTE,
    //     Component: TermsPage
    // }
]