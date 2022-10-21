import * as React from "react";
import { memo } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Container, useTheme, Grid, Paper, Divider } from "@mui/material";
import ContractSection from "./Contract";
import Details from "./Details";
import { StyledDivider } from "../../CustomUi/Divider";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    background: "black",
    padding: "25px 100px",
  },
  "& .MuiDialogContent-root": {
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  "& .MuiDialogActions-root": {},
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface AboutMeDialogProps {
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

const AboutMeDialog = (props: AboutMeDialogProps) => {
  const { isOpenModal, handleCloseModal } = props;
  const theme = useTheme();
  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={isOpenModal}
        maxWidth="lg"
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleCloseModal}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container
            maxWidth="md"
            sx={{
              background: theme.background.primary.dark,
              borderRadius: "10px",
            }}
            disableGutters
          >
            <Grid container spacing={{ xs: 3, md: 2, lg: 2 }} columns={14}>
              <Grid item xs={14} md={5}>
                <ContractSection />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", md: "block" },
                  background: "transparent",
                  borderRight: `1px dashed ${theme.palette.grey[800]}`,
                }}
              />
              <Grid item xs={14} md={8}>
                <Details />
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default memo(AboutMeDialog);
