import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
    basePath: '/studio',
    name: 'default',
    title: 'next blog studio',
    projectId: projectId,
    dataset: dataset,
    plugins: [
        deskTool({
            defaultDocumentNode: getDefaultDocumentNode,
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
    },
});
