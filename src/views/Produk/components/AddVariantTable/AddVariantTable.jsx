import React, {Fragment, useState} from "react";
import {Button, Grid, TextField,InputAdornment} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as actions from '../../../../store/actions';
import {connect} from "react-redux";

const schema = yup.object().shape({
  nama: yup.string().required(),
  harga: yup.number().required(),
  persentasi: yup.number().required(),
});

const useStyles = makeStyles(theme => ({

  btnTextPrimary: {
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  buttonDelete: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.error.main,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    },
  }
}))

const AddVariantTable = props => {
  const classes = useStyles();
  const {onStoreVariant,id_produk} = props;

  const [formState, setFormState] = useState({
    nama: '',
    harga: '',
    persentasi: 0,
  });

  const handleChange = (event) => {
    const target = event.target.name
    event.persist()

    if(event.target.type === 'checkbox'){
      setFormState((formState) => ({
        ...formState,
        [target]: event.target.checked
      }))
    }else{
      setFormState((formState) => ({
        ...formState,
        [target]: event.target.value
      }))
    }
  }

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    let obj = {};
    obj.nama = data.nama;
    obj.harga = data.harga;
    obj.diskon = {
      persentasi: data.persentasi
    };
    onStoreVariant(id_produk,obj)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  label="Nama Varian"
                  variant="standard"
                  name="nama"
                  fullWidth
                  defaultValue={formState.nisbah_investor}
                  onChange={handleChange}
                  inputRef={register}
                  error={!!errors.nama}
                  helperText={errors.nama && errors.nama.message}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  label="Harga"
                  variant="standard"
                  name="harga"
                  fullWidth
                  defaultValue={formState.harga}
                  onChange={handleChange}
                  inputRef={register}
                  error={!!errors.harga}
                  helperText={errors.harga && errors.harga.message}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  label="Persentasi Diskon"
                  variant="standard"
                  name="persentasi"
                  multiline
                  fullWidth
                  defaultValue={formState.persentasi}
                  onChange={handleChange}
                  inputRef={register}
                  error={!!errors.persentasi}
                  helperText={errors.persentasi && errors.persentasi.message}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
                />
              </Grid>
            </Grid>
            <br/><br/>
            <Grid container spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={2}>
                  <Grid item lg={8} md={8} sm={12} xs={12}>

                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Button variant="text" fullWidth >
                          Batal
                        </Button>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Button type={"submit"} variant="text" fullWidth className={classes.btnTextPrimary}>
                          Simpan
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onStoreVariant: (id_produk, formData) => dispatch(actions.storeVariant(id_produk, formData))
  }
}

export default connect(null, mapDispatchToProps)(AddVariantTable);