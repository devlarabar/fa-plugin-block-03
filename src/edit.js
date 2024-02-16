/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { MediaUpload, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = (props) => {
    const {
        attributes: {
            name,
            link,
            mediaID,
            mediaURL
        },
        setAttributes,
    } = props;


    const blockProps = useBlockProps();

    const onChangeName = (value) => {
        setAttributes({ name: value });
    };

    const onSelectImage = (media) => {
        setAttributes({
            mediaURL: media.url,
            mediaID: media.id,
            mediaCaption: media.caption
        })
        console.log('Image selected:', media);
        console.log(props)
    }

    const onChangeLink = (value) => {
        setAttributes({ link: value });
    };

    return (
        <div {...blockProps} className="fa-03-block fa-03-block-edit">
            <div class="fa-03-image-container fa-03-edit-image-container" style={{ backgroundImage: `url(${mediaURL})` }}>
                <MediaUpload
                    onSelect={onSelectImage}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => (
                        <Button className={mediaID ? 'fa-03-img-btn image-button' : 'fa-03-img-btn button button-large'} onClick={open}>
                            {!mediaID && __('Upload Image', 'femart-custom-block-03')}
                        </Button>
                    )} />
                <div class="artist-info-edit">{link ? <a href={link} target="_blank">{name}</a> : name}</div>
            </div>
            <InspectorControls>
                <PanelBody title="Name">
                    <TextControl
                        label="Artist Name"
                        value={name}
                        onChange={onChangeName}
                    />
                    <TextControl
                        label="Artist Link (Full URL)"
                        value={link}
                        onChange={onChangeLink}
                    />
                </PanelBody>
            </InspectorControls>
        </div>
    );
};

export default Edit;
