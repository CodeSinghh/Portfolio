# Blog Management Guide

## Adding a New Article

### Step 1: Prepare Your Image
1. Save your image in the `/public` folder
2. Recommended formats: .webp, .jpg, or .png
3. Image naming convention: use lowercase and hyphens
   ```
   Example: my-article-image.webp
   ```

### Step 2: Add Article to data.ts
1. Open `/src/lib/data.ts`
2. Add a new object to the `mainArticles` array
3. Basic structure:
   ```typescript
   {
     id: 2, // Increment from last article
     headline: "Your Article Title",
     byline: "By Author Name | Published August 26, 2025",
     image: "/your-image-name.webp",
     dataAiHint: "Brief description of image for AI",
     sections: [
       // Your content sections here
     ]
   }
   ```

### Step 3: Structure Your Content
Use these section types for proper formatting:

1. Introduction:
   ```typescript
   {
     type: "introduction",
     content: "Your opening paragraph..."
   }
   ```

2. Headings:
   ```typescript
   {
     type: "heading",
     content: "Your Heading"
   }
   ```

3. Regular Paragraphs:
   ```typescript
   {
     type: "paragraph",
     content: "Your paragraph text..."
   }
   ```

4. Bullet Points:
   ```typescript
   {
     type: "bullets",
     items: [
       "First bullet point",
       "Second bullet point",
       "Third bullet point"
     ]
   }
   ```

## Text Styling Guide

### Available Styles

1. **Main Headline**
   - Font: Playfair Display (automatic)
   - Size: Large (text 5xl-6xl)
   - Weight: Bold
   ```typescript
   headline: "Your Main Title"
   ```

2. **Section Headings**
   - Use the heading type
   - Will be styled automatically with:
   - Font: Playfair Display
   - Size: text-3xl
   - Weight: Bold
   ```typescript
   {
     type: "heading",
     content: "Section Title"
   }
   ```

3. **Introduction Text**
   - Slightly larger than regular paragraphs
   - Medium weight
   - Justified alignment
   ```typescript
   {
     type: "introduction",
     content: "Opening paragraph..."
   }
   ```

4. **Regular Paragraphs**
   - Standard size
   - Justified alignment
   - Proper line height for readability
   ```typescript
   {
     type: "paragraph",
     content: "Your text here..."
   }
   ```

5. **Bullet Points**
   - Proper indentation
   - List style: disc
   - Consistent spacing
   ```typescript
   {
     type: "bullets",
     items: ["Your", "bullet", "points"]
   }
   ```

## Complete Example

```typescript
{
  id: 2,
  headline: "Your Article Title",
  byline: "By Author Name | Published August 26, 2025",
  image: "/article-image.webp",
  dataAiHint: "Description of image",
  sections: [
    {
      type: "introduction",
      content: "Your engaging introduction paragraph..."
    },
    {
      type: "heading",
      content: "First Major Section"
    },
    {
      type: "paragraph",
      content: "Regular paragraph content..."
    },
    {
      type: "heading",
      content: "Key Points to Consider"
    },
    {
      type: "bullets",
      items: [
        "First important point",
        "Second important point",
        "Third important point"
      ]
    },
    {
      type: "heading",
      content: "Conclusion"
    },
    {
      type: "paragraph",
      content: "Your concluding thoughts..."
    }
  ]
}
```

## Important Tips

1. **Images**
   - Always optimize images before adding
   - Use descriptive names
   - Place in public folder
   - Provide meaningful AI hints

2. **Content Structure**
   - Start with introduction
   - Use headings to break up content
   - Keep paragraphs concise
   - Use bullet points for lists
   - End with a conclusion

3. **Best Practices**
   - Use clear, descriptive headlines
   - Include author and date in byline
   - Maintain consistent formatting
   - Test article after adding
   - Preview image placement

4. **Spacing**
   - Sections are automatically spaced
   - Headings have proper margins
   - Lists have consistent spacing
   - Paragraphs have comfortable line height

## Testing Your Article

1. Add your article to data.ts
2. Start development server: `npm run dev`
3. Navigate to your article using its ID
4. Check:
   - Image loading
   - Text formatting
   - Spacing
   - Responsive design
   - Link functionality

Need help? Refer to this guide or check existing articles for examples.