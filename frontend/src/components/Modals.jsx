import { Wrapper } from "./Layouts";
import { PrimaryBtn } from "./Buttons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "./Layouts";
const ModalComp = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${isResponsive ? "90%" : "60%"}`,
    bgcolor: "black",
    color: "white",
    borderRadius: "15px",
    outline: "none",
    border: "1px solid #16a092",
    p: 4,
  };
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Wrapper className="d-flex flex-row justify-content-center align-items-center">
            <Wrapper>
              <Wrapper weight="700" size="31px">
                {props.heading}
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Wrapper>{props.children}</Wrapper>

          <Wrapper className="d-flex flex-row align-items-center justify-content-center gap-3">
            <PrimaryBtn
              data-aos="zoom-in"
              hoverBg="transparent"
              onClick={props.submitHandler}
              bg="#16a092"
              className="btn btn-simision text-white ps-3 pe-3 fw-bold"
              style={{ border: "1px solid #16a092", fontSize: "21px" }}
            >
              Submit
            </PrimaryBtn>
            <PrimaryBtn
              onClick={() => {
                props.setOpen(false);
              }}
              // style={{ border: "none" }}
              className="rounded btn text-white ps-2 pe-2 fs-5 fw-bold"
            >
              Close
            </PrimaryBtn>
          </Wrapper>
        </Box>
      </Modal>
    </>
  );
};
export default ModalComp;
