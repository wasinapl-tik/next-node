import React, { ReactElement } from 'react'
import Header from '../../components/layouts/header'
import Layout from '../../components/layouts/layout'
import Menu from '../../components/layouts/menu'
import MaterialTable, { Action, MTableToolbar } from 'material-table'
import { products } from '../api/dummy'
import { Button, Chip, Typography } from '@material-ui/core'
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { DeleteOutline, Edit } from '@material-ui/icons'
interface Props {

}

export default function index({ }: Props): ReactElement {
    const columns = [
        {
            title: "ID",
            render: (item) => <Typography variant="body1" >{item.id}</Typography>
        },
        {
            title: "IMAGE",
            cellStyle: { padding: 5 },
            render: (item) => (
                <img
                    src="http://www.codemobiles.com/biz/images/cm_logo.png?ref=10"
                    style={{ width: 50, height: 50, borderRadius: "5%" }}
                />
            ),
        },
        {
            title: "NAME",
            cellStyle: { minWidth: 500 },
            render: (item) => <Typography variant="body1" style={{ color: 'yellowgreen' }} >{item.name}</Typography>
        },
        {
            title: "PRICE",
            render: (item) => <Typography variant="body1" >
                <NumberFormat value={item.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={"$"}
                />
            </Typography>
        },
        {
            title: "STOCK",
            render: (item) => <Typography variant="body1" >
                <NumberFormat value={item.stock}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    suffix={" pcs"}
                />
            </Typography>
        },
        {
            title: "CREATED",
            render: (item) => <Typography variant="body1"  >
                <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
            </Typography>
        },
    ];

    const actions: Action<any>[] = [

        {
            icon: () => <Edit color="secondary" />,
            tooltip: "Edit",
            onClick: () => {

            }
        },

        {
            icon: () => <DeleteOutline color="secondary" />,
            tooltip: "Delete",
            onClick: () => {

            }
        }
    ];


    return (

        <Layout>
            <MaterialTable
                columns={columns}
                data={products}
                title="Stock"
                actions={actions}
                components={{
                    Toolbar: (props) => (
                        <div>
                            <MTableToolbar {...props} />
                            <div style={{ padding: "0px 10px" }}>
                                <Button fullWidth variant="contained" color="primary">
                                    Create
                          </Button>
                            </div>
                        </div>
                    ),
                }}
            />
        </Layout>


    )
}