import {Route, Routes, useSearchParams} from "react-router-dom";
import React from "react";
import NoteHomePage from "../pages/NoteHomePage.jsx";
import AddNewNotePageWrapper from "../pages/AddNewNotePage.jsx";
import ArchivedNotesPage from "../pages/ArchivedNotesPage.jsx";
import DetailNotePage from "../pages/DetailNotePage.jsx";
import UpdateNotePageWrapper from "../pages/UpdateNotePage.jsx";
import {J, validateProps} from "../utils/utils.js";
import DashboardNote from "./DashboardNote.jsx";
import NotFound404 from "../pages/NotFound404.jsx";
import AuthNote from "./AuthNote.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import {getUserLogged, putAccessToken} from "../utils/network-data.js";

function NotesAppWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get("q") || "";

    function searchNotes(keyword) {
        setSearchParams({q: keyword});
    }

    return (<NotesApp keyword={keyword} searchNotes={searchNotes}/>)
}

const noteAppPropsSchema = J.object({
    keyword: J.string().allow(null, ""),
    searchNotes: J.func().required(),
})

class NotesApp extends React.Component {

    constructor(props) {
        super(props);

        const validatedProps = validateProps(noteAppPropsSchema, props, "NotesApp");

        this.state = {
            validatedProps,
            authenticatedUser: null,
            isLoading: true,
        };

        this.handleSearchNotes = this.handleSearchNotes.bind(this);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
    }

    handleSearchNotes(event) {
        this.setState(() => {
            return {
                validatedProps: {
                    keyword: event.target.value,
                }
            }
        });

        this.props.searchNotes(this.state.validatedProps.keyword);
    }

    async onSuccessLogin(accessToken) {
        putAccessToken(accessToken);

        const {data} = await getUserLogged();

        this.setState(() => {
            return {
                authenticatedUser: data,
            };
        });
    }

    async componentDidMount() {
        console.log("did mount")
        const {data} = await getUserLogged();

        this.setState(() => {
            return {
                authenticatedUser: data,
                isLoading: false,
            };
        });
    }

    render() {
        return (
            <Routes>
                <Route path="*" element={<NotFound404/>}/>
                <Route element={<AuthNote authenticatedUser={this.state.authenticatedUser} isLoading={this.state.isLoading}/>}>
                    <Route path="login" element={<LoginPage onSuccessLogin={this.onSuccessLogin}/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                </Route>
                <Route element={<DashboardNote searchQuery={this.state.validatedProps}
                                               handleSearchNotes={this.handleSearchNotes}
                                               authenticatedUser={this.state.authenticatedUser}
                                               isLoading={this.state.isLoading}/>}>
                    <Route index element={<NoteHomePage
                        searchNotesKeyword={this.state.validatedProps.keyword}/>}/>
                    <Route path="add-note" element={<AddNewNotePageWrapper/>}/>
                    <Route path="archived-notes"
                           element={<ArchivedNotesPage
                               searchNotesKeyword={this.state.validatedProps.keyword}/>}/>
                    <Route path="notes">
                        <Route path=":id" element={<DetailNotePage/>}/>
                        <Route path=":id/edit" element={<UpdateNotePageWrapper/>}/>
                    </Route>
                </Route>
            </Routes>
        )
    }
}

export default NotesAppWrapper;
