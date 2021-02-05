import { Button, ComposedModal, ModalHeader, ModalBody, Form, TextInput } from "carbon-components-react";

const ModalView = ({modalOpen, setModal, updateCords}) => (
  <ComposedModal
  size="lg"
  open={modalOpen}
  onClose={() => setModal(false)}
>
  <ModalHeader>Create a new songs</ModalHeader>
  <ModalBody>
    <Form>
      <div className="bx--row">
        <div className="bx--col-lg-13 bx--col-md-6 bx--col-sm-2">
          <div className="outside">
            <div className="inside">
              <TextInput
              labelText="Music Director"
                helperText="Letters a to g and spaces allowed"
                id="fullNotes"
                invalidText="only a to g and spaces allowed."
                placeholder="bdbdc   edced   dfdfedc fedcb b "
                pattern="[a-g A-G]+"
                light
              />
            </div>
          </div>
        </div>
        <div className="bx--col-lg-3 bx--col-md-2 bx--col-sm-2">
          <div className="outside">
            <div className="inside">
              <Button
                onClick={updateCords}
                bg="brand800"
                rounded="brandRadius"
                shadow="4"
                kind="secondary"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </ModalBody>
</ComposedModal>
);

export default ModalView