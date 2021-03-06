import React, {useState, useEffect} from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import postsData from "../../datas/PostsData";
import {Link, useHistory} from "react-router-dom";


const BasicForms = (props) => {
  let history = useHistory();

  let idPost= props.match.params.idpost
  const [question, setQuestion] = useState("")
  const [reponse, setReponse] = useState("")

  useEffect(() => {

    const currentPost =postsData.filter( post => post.id == idPost)

    setQuestion(currentPost[0].question)
    setReponse(currentPost[0].reponse)


  },[])



  const handleSubmit = () => {
    postsData.push({
      id: "21",
      question: `${question}`,
      reponse: `${reponse}`,
      user: "2",
      created_at: new Date(),
      created_by: "Pierre Ammeloot",


    });
    history.push(`/pages/posts/`);
  };

  return (
    <>
      <CCol xs="12" md="4">
        <CCard>
          <CCardHeader>
            Modification Post
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="12">
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">Question</CLabel>
                    <CInput id="exampleInputName2"  value={question} placeholder="" onChange={e => setQuestion(e.target.value)} required/>
                  </CFormGroup>
                  <CFormGroup className="pr-1">
                    <CLabel htmlFor="exampleInputName2" className="pr-1">Réponse</CLabel>
                    <CInput id="exampleInputName2" value={reponse} placeholder="" onChange={e => setReponse(e.target.value)} required/>
                  </CFormGroup>
                </CCol>
              </CFormGroup>


            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success" onClick={handleSubmit}><CIcon name="cil-scrubber"/> Valider</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </>
  );
};

export default BasicForms;
