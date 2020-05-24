import React from 'react'
import { Table } from 'semantic-ui-react';

const UrlTable = () => (
    <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Website</Table.HeaderCell>
                <Table.HeaderCell>Short URL</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>Website Name</Table.Cell>
                <Table.Cell>
                    <a href="#">
                    www.short.url
                    </a>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Website Name</Table.Cell>
                <Table.Cell>
                    <a href="#">
                    www.short.url
                    </a>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>Website Name</Table.Cell>
                <Table.Cell>
                    <a href="#">
                    www.short.url
                    </a>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default UrlTable