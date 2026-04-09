#version 450
#extension GL_NV_gpu_shader5 : require
#extension GL_EXT_texture_shadow_lod : require

uniform sampler2DArrayShadow SPIRV_Cross_CombinedShadowMapShadowSamplerPCF;

layout(location = 0) in vec2 texCoords;
layout(location = 1) in float cascadeIndex;
layout(location = 2) in float fragDepth;
layout(location = 3) in float lodLevel;
layout(location = 0) out vec4 _entryPointOutput;

vec4 _main(vec2 texCoords_1, float cascadeIndex_1, float fragDepth_1, float lodLevel_1)
{
    vec4 _39 = vec4(vec3(texCoords_1, cascadeIndex_1), fragDepth_1);
    float c = textureLod(SPIRV_Cross_CombinedShadowMapShadowSamplerPCF, vec4(_39.xyz, _39.w), lodLevel_1);
    return vec4(c, c, c, c);
}

void main()
{
    vec2 texCoords_1 = texCoords;
    float cascadeIndex_1 = cascadeIndex;
    float fragDepth_1 = fragDepth;
    float lodLevel_1 = lodLevel;
    vec2 param = texCoords_1;
    float param_1 = cascadeIndex_1;
    float param_2 = fragDepth_1;
    float param_3 = lodLevel_1;
    _entryPointOutput = _main(param, param_1, param_2, param_3);
}

