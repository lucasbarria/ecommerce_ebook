import React from 'react';
import Card from './Card'
import Category from './Category'
import Row from './Row'
import Table from './Table'

function PageContent() {
    let cardContent = {
        titulo: 'Products in database',
        cifra: '135',
        color: 'primary',
        icono: 'fas fa-clipboard-list fa-2x text-gray-300'
    }
    let cardContent2 = {
        titulo: 'Amount in products',
        cifra: '$546.456',
        color: 'success',
        icono: 'fas fa-dollar-sign fa-2x text-gray-300'
    }
    let cardContent3 = {
        titulo: 'Users quantity',
        cifra: '38',
        color: 'warning',
        icono: 'fas fa-user-check fa-2x text-gray-300'
    }
  return (
    <div class="container-fluid">

        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        <div class="row">
            <Card cardContent = {cardContent}/>
            <Card cardContent = {cardContent2}/>
            <Card cardContent = {cardContent3}/>
        </div>

        <div class="row">
            <Row/>
            <Category/>
        </div>

        <Table/>

    </div>
  );
}

export default PageContent;